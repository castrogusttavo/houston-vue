
<template>
  <Icon :iconName="'cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud'
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
