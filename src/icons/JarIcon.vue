
<template>
  <Icon :iconName="'jar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jar'
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
