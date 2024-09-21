
<template>
  <Icon :iconName="'npm'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NpmIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'npm'
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
