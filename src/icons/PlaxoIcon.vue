
<template>
  <Icon :iconName="'plaxo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlaxoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plaxo'
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
