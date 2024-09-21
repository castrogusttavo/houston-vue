
<template>
  <Icon :iconName="'motorbike-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Motorbike02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'motorbike-02'
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
