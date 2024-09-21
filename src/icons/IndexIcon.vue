
<template>
  <Icon :iconName="'index'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IndexIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'index'
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
