# API MongoDB

## Instalar

```bash
$ npm install
```

## Correr

```bash
# development
$ npm run start
```

## Endpoints

### Create

Utilizando el llamado ```/api/v1/superstitions/create``` se podrá crear un nuevo documento dentro de la base de datos.

_Endpoint_

```bash
curl --location 'http://localhost:3000/sites' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Beautiful Beach Resort",
  "description": "A wonderful resort with stunning beach views and world-class amenities.",
  "category": {
    "name": "Resort",
    "description": "Luxury accommodations near the beach."
  },
  "location": {
    "city": "Cartagena",
    "latitude": 10.391048,
    "longitude": -75.479425
  },
  "opening_hours": "Monday to Sunday: 8:00 AM - 10:00 PM",
  "entry_fee": 50000,
  "website": "https://beautifulbeachresort.com",
  "photos": [
    {
      "photo_url": "https://example.com/photos/resort1.jpg",
      "description": "A stunning view of the beach from the resort.",
      "upload_date": "2024-11-01"
    },
    {
      "photo_url": "https://example.com/photos/resort2.jpg",
      "description": "Luxurious rooms with ocean views.",
      "upload_date": "2024-11-02"
    }
  ],
  "reviews": [
    {
      "reviewer_name": "John Doe",
      "rating": 4.5,
      "comment": "Amazing place with friendly staff and great amenities.",
      "review_date": "2024-10-30"
    },
    {
      "reviewer_name": "Jane Smith",
      "rating": 5,
      "comment": "The beach is pristine, and the food is incredible!",
      "review_date": "2024-11-01"
    }
  ]
}'
```

_Mongo_

```js
db.collection.insertOne({
  "name": "Beautiful Beach Resort",
  "description": "A wonderful resort with stunning beach views and world-class amenities.",
  "category": {
    "name": "Resort",
    "description": "Luxury accommodations near the beach."
  },
  "location": {
    "city": "Cartagena",
    "latitude": 10.391048,
    "longitude": -75.479425
  },
  "opening_hours": "Monday to Sunday: 8:00 AM - 10:00 PM",
  "entry_fee": 50000,
  "website": "https://beautifulbeachresort.com",
  "photos": [
    {
      "photo_url": "https://example.com/photos/resort1.jpg",
      "description": "A stunning view of the beach from the resort.",
      "upload_date": "2024-11-01"
    },
    {
      "photo_url": "https://example.com/photos/resort2.jpg",
      "description": "Luxurious rooms with ocean views.",
      "upload_date": "2024-11-02"
    }
  ],
  "reviews": [
    {
      "reviewer_name": "John Doe",
      "rating": 4.5,
      "comment": "Amazing place with friendly staff and great amenities.",
      "review_date": "2024-10-30"
    },
    {
      "reviewer_name": "Jane Smith",
      "rating": 5,
      "comment": "The beach is pristine, and the food is incredible!",
      "review_date": "2024-11-01"
    }
  ]
})
```

## Read

### Singular

_Endpoint_

```bash
curl --location 'http://localhost:3000/sites/673c0592139d68797315bb83'
```

_MongoDB_

```js
db.collection.findOne(
  {},
  { _id: 673c0592139d68797315bb83 }
)
```

### Plural

_Endpoint_

```bash
curl --location 'http://localhost:3000/sites'
```

_MongoDB_

```js
db.collection.find()
```

## Updat

_Endpoint_

```bash
curl --location 'http://localhost:3000/sites/update/673c0cd9be01486cc9fa6ef7' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Hermoso Resort en la Playa"
}'
```

_MongoDB_

```js
db.collection.findOneAndUpdate(
  { _id: 673c0cd9be01486cc9fa6ef7 },
  { $set: {
    "name": "Hermoso Resort en la Playa"
  }}
)
```

## Delete

_Enndpoint_

```bash
curl --location --request POST 'http://localhost:3000/sites/delete/673c0cd9be01486cc9fa6ef7'
```

_MongoDB_

```js
db.collection.findOneAndDelete(
  { _id: 673c0cd9be01486cc9fa6ef7 }
)
```
