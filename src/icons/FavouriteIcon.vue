
<template>
  <Icon :iconName="'favourite'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FavouriteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'favourite'
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
