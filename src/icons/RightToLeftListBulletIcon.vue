
<template>
  <Icon :iconName="'right-to-left-list-bullet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightToLeftListBulletIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-to-left-list-bullet'
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
