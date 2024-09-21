
<template>
  <Icon :iconName="'sin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sin'
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
