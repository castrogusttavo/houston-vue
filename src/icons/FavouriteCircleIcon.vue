
<template>
  <Icon :iconName="'favourite-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FavouriteCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'favourite-circle'
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
