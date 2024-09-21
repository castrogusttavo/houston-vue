
<template>
  <Icon :iconName="'dress-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-02'
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
