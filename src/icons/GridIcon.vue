
<template>
  <Icon :iconName="'grid'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GridIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grid'
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
