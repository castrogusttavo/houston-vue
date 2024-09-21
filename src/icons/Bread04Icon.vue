
<template>
  <Icon :iconName="'bread-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bread04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bread-04'
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
