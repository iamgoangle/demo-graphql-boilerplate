# ACCOUNT PAGE - DATA AGGREGATION LAYER

## Introduction

This is a layer to aggregate data

## Querying

### account_introduction

```
{
  account_introduction {
    name
    data {
      text
      imageUrl {
        original
      }
    }
  }
}
```

### chatbot

```
{
  chatbot {
    name
    data {
      text
      images {
        original
      }
      video {
        thumbnailUrl {
          original
        }
        videoUrl
      }
    }
  }
}
```

### bot-information

```
{
  bot_information {
    name
    data {
      botId
      data {
        mid
        searchId
        name
        statusMessage
        imageUrl
        approvalBadge
        categoryName
        subCategoryName
        friendsCount
        oneOnOneChat
        businessHours
        messageDeliveryFrequency
        plugins
        addFriendButtonText
        coverImages {
          original
        }
        colorTheme
      }
    }
  }
}
```

### commerce

```
{
  commerce {
    name
    data {
      id
      text
      price
      images {
        original
      }
    }
  }
}
```

### coupon

```
{
  coupon {
    name
    data {
      meta {
        page
        perPage
      }
      coupons {
        id
        url
        title
        imageUrl
        validDate
        startDate
        endDate
        disclosureRange
        acceptNonFriend
      }
    }
  }
}
```

### history

```
{
  history {
    name
    meta {
      page
      perPage
    }
    data {
      title
      historiesLists {
        id
        text
        date
      }
    }
  }
}
```

### item

```
{
  item {
    name
    meta {
      page
      perPage
    }
    data {
      title
      itemLists {
        id
        name
        text
        imageUrl {
          original
        }
      }
    }
  }
}
```

### photo

```
{
  photo {
    name
    meta {
      page
      perPage
    }
    data {
      title
      photoLists {
        text
        imageUrl {
          original
        }
      }
    }
  }
}
```

### recruitment

```
{
  recruitment {
    name
    data {
      text
      imageUrl
    }
  }
}
```

### store-information

```
{
  store_information {
    name
    data {
      introduction
      address
      direction1
      direction2
      latitude
      longtitude
      openingHour {
        text
        data {
          sunday {
            start
            end
          }
          monday {
            start
            end
          }
          tuesday {
            start
            end
          }
          wednesday {
            start
            end
          }
          thursday {
            start
            end
          }
          friday {
            start
            end
          }
        }
      }
    }
  }
}
```
