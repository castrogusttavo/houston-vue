
<template>
  <Icon :iconName="'left-to-right-list-star'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightListStarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-list-star'
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
