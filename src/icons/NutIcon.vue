
<template>
  <Icon :iconName="'nut'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nut'
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
