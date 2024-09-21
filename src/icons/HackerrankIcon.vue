
<template>
  <Icon :iconName="'hackerrank'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HackerrankIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hackerrank'
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
