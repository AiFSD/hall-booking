WEB DEVELOPER TASK :

Hall Booking API - 

TASK: Write API for hall booking application
The task is to write API for hall booking app for

1. Creating a Room with
Number of Seats available
amenities in room
Price for 1 Hour

2. Booking a Room with
Customer Name
Date
Start Time
End Time
Room ID

3. List all Rooms with Booked Data with
Room Name
booked Status
customer name
Date
Start Time
End Time

4. List all customers with booked Data with
Customer name
Room Name
Date
Start Time
End Time

5. List how many times a customer has booked the room with below details
Customer name
Room Name
Date
Start Time
End Time
Booking id
Booking date
Booking status

1. How to write an API?

• Create an Express server.
• Create an endpoint and write your logic.
• Can use local variables to store data.
• Write API documentation in postman docs.

2. Any specifications and constraints?
   Back-End: Node Js

Basic requirements:
。 While booking app should not allow booking an already booked room on the same date and
   time.

   The code should be clean with proper variable, function naming and proper comments.

### Hall Bookings

## Models :
1. rooms
2. number of seats
3. ameneties
4. price per hour

## Bookings:
1. room name
2. customer name
3. date
4. start time
5. end time
6. booking id
7. booking date
8. booking status

## Api's : 

# create room - ( POST/rooms ) 
- Request Body : {room_name , number_of_sdeats , amenities , Price_per_hour }
- Response : { room_name , number_of_sdeats , amenities , Price_per_hour }

# Book room - ( POST/ bookings)
- Request Body : { room_name , customer_name , date , start_time , end_time }
- Response : { booking_id , booking_date , booking_status }

# list all rooms with booking data

- GET / rooms
- Response : { room_name ,
  booked_status , customer_name , date , start_time , end_time }

# list all the customers with booked data 
- GET / customers
- Response : { customer_name ,
  room_name , date , start_time , end_time }

 # list how many times a customer has booked the room 
 - GET / customer_bookings
 - Response : { customer_name ,room_name , date , start-time ,
   end-time , booking id ,  booking date , booking status }


