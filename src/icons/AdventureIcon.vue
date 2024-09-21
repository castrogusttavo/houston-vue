
<template>
  <Icon :iconName="'adventure'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdventureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adventure'
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
