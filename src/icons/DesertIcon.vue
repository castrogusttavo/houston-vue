
<template>
  <Icon :iconName="'desert'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DesertIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'desert'
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
