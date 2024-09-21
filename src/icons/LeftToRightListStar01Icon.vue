
<template>
  <Icon :iconName="'left-to-right-list-star-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightListStar01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-list-star-01'
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
