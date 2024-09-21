
<template>
  <Icon :iconName="'sphere'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SphereIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sphere'
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
