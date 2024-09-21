
<template>
  <Icon :iconName="'uv-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Uv03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'uv-03'
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
