<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Card Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f8f8;
        }

        .card {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 350px;
            overflow: hidden;
            text-align: center;
            padding: 20px;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card-image {
            border-radius: 15px;
            width: 100%;
            height: 200px;
            background-image: url('https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg');
            background-size: cover;
            background-position: center;
            transition: opacity 0.3s;
        }

        .card:hover .card-image {
            opacity: 0.8;
        }

        .card-content {
            padding: 20px;
        }

        .card-title {
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .card-description {
            font-size: 1em;
            margin-bottom: 10px;
        }

        .card-price {
            font-size: 1.2em;
            margin-bottom: 20px;
        }

        .price {
            font-weight: bold;
        }

        .add-to-cart-button {
            background-color: #ffc107;
            border: none;
            border-radius: 25px;
            color: #fff;
            cursor: pointer;
            font-size: 1em;
            padding: 10px 20px;
            text-transform: uppercase;
            transition: background-color 0.3s;
            width: 100%;
        }

        .add-to-cart-button:hover {
            background-color: #ff9800;
        }
    </style>
</head>

<body>
    <div class="container mx-auto mt-8">
        <div class="card max-w-sm mx-auto">
            <div class="card-image"></div>
            <div class="card-content">
                <h2 class="card-title">Product Title</h2>
                <p class="card-description">Product Description</p>
                <div class="card-price">
                    <span class="price">$99.99</span>
                </div>
                <button class="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    </div>
</body>

</html>

// the yellow cart