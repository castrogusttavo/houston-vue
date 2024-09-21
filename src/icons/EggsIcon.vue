
<template>
  <Icon :iconName="'eggs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EggsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eggs'
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
