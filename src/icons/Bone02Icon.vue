
<template>
  <Icon :iconName="'bone-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bone-02'
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
