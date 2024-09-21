
<template>
  <Icon :iconName="'calendar-favorite-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarFavorite01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-favorite-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
