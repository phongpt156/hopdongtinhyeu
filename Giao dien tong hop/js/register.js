$(document).ready(function () {
  let selectedTags = [
    { name: 'Hài hước', color: '#c5c5c5' },
    { name: 'Nhiều bạn bè tốt', color: '#c5c5c5' },
    { name: 'Thích đọc sách truyện', color: '#c2c5c6' },
    { name: 'Thích hát', color: '#aaa1b6' },
    { name: 'Chia sẻ', color: '#c3c4c3' },
    { name: 'Là người của công việc', color: '#c9c8c9' },
    { name: 'Năng động', color: '#c5c5c5' },
    { name: 'Bình thường', color: '#c5c5c5' },
    { name: 'Dễ gần', color: '#c5c5c5' },
    { name: 'Ít nói', color: '#c5c5c5' },
    { name: 'Nghiêm túc', color: '#c5c5c5' },
    { name: 'Lạnh lùng', color: '#c3c6c5' }
  ];
  let remainTags = [
    { name: 'Sống phóng khoáng', color: '#8eb49a' },
    { name: 'Thích du lịch', color: '#c5c5c5' },
    { name: 'Nhút nhát', color: '#e4c3aa' },
    { name: 'Có trách nhiệm', color: '#a67887' },
    { name: 'Thích thể thao', color: '#ec8584' },
    { name: 'Chu đáo', color: '#aaa5b8' },
    { name: 'Là người của gia đình', color: '#69c3e3' },
    { name: 'Dịu dàng', color: '#bcc68c' },
    { name: 'Hiền lành', color: '#eac197' },
    { name: 'Cá tính', color: '#c692b0' },
    { name: 'Thích đọc sách, truyện', color: '#c2c5c6' },
    { name: 'Trung thực', color: '#aba1b7' },
    { name: 'Dễ thương', color: '#c995af' },
    { name: 'Là người của công việc', color: '#c9c8c9' },
    { name: 'Chăm chỉ', color: '#c098b2' },
    { name: 'Bình thường', color: '#c5c5c5' },
    { name: 'Thích đọc sách truyện', color: '#c2c5c6' },
    { name: 'Hài hước', color: '#c5c5c5' },
    { name: 'Chia sẻ', color: '#c3c4c3' },
    { name: 'Thích hát', color: '#aaa1b6' },
    { name: 'Thích đi dạo công viên', color: '#6bc7df' },
    { name: 'Thích chụp ảnh', color: '#ff7b79' },
    { name: 'Thích lãng mạn', color: '#ff7b79' },
    { name: 'Thích du lịch', color: '#ff7b79' },
    { name: 'Thú vị', color: '#bcc592' },
    { name: 'Suy tư', color: '#e3c396' },
    { name: 'Hòa đồng', color: '#89b695' },
    { name: 'Nóng tính', color: '#a08393' },
    { name: 'Chăm chỉ', color: '#90b797' },
    { name: 'Bướng bỉnh', color: '#aca1b6' },
  ];

  function adSelectedTag(tag) {
    const el = $(`<li class="tag-item"></li>`);

    el.html(`
      <a>
        ${tag.name}
        <span class="glyphicon glyphicon-remove remove-icon" aria-hidden="true""></span>
      </a>
    `);
    $('.selected-list').append($(el));
  }
  function adRemainTag(tag) {
    const el = $(`<li class="tag-item"></li>`);

    el.html(`
      <a style="background-color: ${tag.color}">
        ${tag.name}
      </a>
    `);
    $('.remain-list').append($(el));
  }

  selectedTags.forEach(function (tag) {
    adSelectedTag(tag);
  });
  if (selectedTags.length !== 0) {
    $('.selected-list').css('margin-bottom', '1em');
  }
  remainTags.forEach(function (tag) {
    adRemainTag(tag);
  });

  $(document).on('click', '.selected-list .tag-item .remove-icon', function () {
    const tagItemElement = $(this).closest('.tag-item');
    const index = $('.selected-list .tag-item').index($(tagItemElement));

    tagItemElement.remove();
    const tag = selectedTags.splice(index, 1)[0];
    if (selectedTags.length === 0) {
      $('.selected-list').css('margin-bottom', 0);
    }
    adRemainTag(tag);
    remainTags.push(tag);
  });

  $(document).on('click', '.remain-list .tag-item', function () {
    const index = $('.remain-list .tag-item').index($(this));
    $(this).remove();
    const tag = remainTags.splice(index, 1)[0];
    if (selectedTags.length === 0) {
      $('.selected-list').css('margin-bottom', '1em');
    }
    adSelectedTag(tag);
    selectedTags.push(tag);
  });
});
