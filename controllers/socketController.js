export const socketController = (io) => {
  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Handle new player joining
    socket.on('player_joined', (data) => {
      console.log(`Player joined:`, data);

      // Broadcast to other players about the new player
      socket.broadcast.emit('new_player', {
        id: socket.id,
        position: data.position,
      });
    });

    // Handle player movement
    socket.on('player_moved', (data) => {
      console.log(`Player moved:`, data);

      // Broadcast the new position to all other clients
      socket.broadcast.emit('update_position', {
        id: socket.id,
        position: data.position,
      });
    });

    // Handle player disconnection
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);

      // Notify other clients about the disconnection
      socket.broadcast.emit('player_left', {
        id: socket.id,
      });
    });
  });
};
