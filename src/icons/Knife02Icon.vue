
<template>
  <Icon :iconName="'knife-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Knife02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'knife-02'
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
