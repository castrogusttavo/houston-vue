
<template>
  <Icon :iconName="'lamp-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Lamp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lamp-02'
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
