function itemFilter(item) {
    let images = [];
    item[0].ImageSets[0].ImageSet.forEach((key, value) => {
        images.push(key.LargeImage[0].URL[0])
    });
    return filteredItem = {
        "_id": item[0].ASIN[0],
        "image": item[0].LargeImage[0].URL[0],
        "title": item[0].ItemAttributes[0].Title[0],
        "price": item[0].Offers[0].Offer[0].OfferListing[0].Price[0].Amount[0],
        "lowPrice": item[0].OfferSummary[0].LowestUsedPrice ? item[0].OfferSummary[0].LowestUsedPrice[0].Amount[0] :item[0].OfferSummary[0].LowestNewPrice[0].Amount[0],
        "description": item[0].EditorialReviews[0].EditorialReview[0].Content[0],
        "features": item[0].ItemAttributes[0].Feature,
        "imageSets": images,
    };
}

let ItemFilter = module.exports = itemFilter;