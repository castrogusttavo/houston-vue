
<template>
  <Icon :iconName="'favourite-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FavouriteSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'favourite-square'
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
