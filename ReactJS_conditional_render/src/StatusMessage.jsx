function StatusMessage({status}) {
  switch(status)
  {
    case "idle": return <p><img src="https://images.unsplash.com/photo-1618517047922-d18a5a36c109?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxpZGxlfGVufDB8fHx8MTc4OTA1NDg3NXww&ixlib=rb-4.1.0&fit=max&q=80" width="100" height="100"/>User is Idle</p>;
    case "loading": return <p><img src="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxfHxsb2FkaW5nfGVufDB8fHx8MTc4OTA1NDk2OHww&ixlib=rb-4.1.0&fit=max&q=80" width="100" height="100"/>User Profile is Loading....</p>;
    case "success": return <p>User Profile is loaded successfully</p>;
    case "error": return <p>Hey!!! Sorry Boss !!! We encountered an error</p>;
    default: return <p>No Status Available!!!</p>
  }
}

export default StatusMessage;