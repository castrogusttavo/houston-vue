
<template>
  <Icon :iconName="'island'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IslandIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'island'
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
