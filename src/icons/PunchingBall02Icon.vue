
<template>
  <Icon :iconName="'punching-ball-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PunchingBall02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'punching-ball-02'
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
