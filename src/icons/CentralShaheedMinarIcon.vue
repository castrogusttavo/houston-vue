
<template>
  <Icon :iconName="'central-shaheed-minar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CentralShaheedMinarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'central-shaheed-minar'
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
