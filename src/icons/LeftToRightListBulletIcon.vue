
<template>
  <Icon :iconName="'left-to-right-list-bullet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightListBulletIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-list-bullet'
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
