function getStars(rating) {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
  
    const starHtml = Array(fullStars)
      .fill('<i class="fas fa-star" style="color: #ffff00;"></i>')
      .join('');
  
    const halfStarHtml = halfStar
      ? '<i class="fas fa-star-half-alt" style="color: #ffff00;"></i>'
      : '';
  
    const emptyStarHtml = Array(maxRating - fullStars - (halfStar ? 1 : 0))
      .fill('<i class="far fa-star"></i>')
      .join('');
  
    return starHtml + halfStarHtml + emptyStarHtml;
  }

  export {getStars};

   