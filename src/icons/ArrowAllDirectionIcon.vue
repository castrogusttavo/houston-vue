
<template>
  <Icon :iconName="'arrow-all-direction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowAllDirectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-all-direction'
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
