
<template>
  <Icon :iconName="'smart-watch-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartWatch03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-watch-03'
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
