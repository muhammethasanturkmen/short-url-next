const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zenRhaG56cXd0dWFwdnZzcG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NDk1ODcsImV4cCI6MjA0NDIyNTU4N30.LCNYihLzKTtiTmipg-JVKJcrScj2JmRVamiQ8WEZtpQ"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}