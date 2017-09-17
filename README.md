# Rose
> A robot (Arduino) that you can control from your phone.

Rose is a GCSE HPQ entry. Simply tap and move your finger or mouse to move a real life robot, in real time with video feedback.

Rose's front end (the controller) is written in HTML, CSS and JS and uses socket.io to send real-time commands to the server, which controls the robot.

The server parses the information sent to it by the controller and understands how fast each of robot's wheels should move (if at all), then sends the movement command to the robot through a cable.

The cable needs to be hoisted upwards so that the robot won't walk on its cable and damge it or itself. That's why there's a simple wooden structure that holds the cable above the robot.

When the robot (Arduino) recieves the command to move, it sends electrical signals through a motor sheild (which protects the robot from high-voltage motors). Next, when the motors recieve the electricity, they start moving according to whatever command the user inserted.
