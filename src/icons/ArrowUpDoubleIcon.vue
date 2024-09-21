
<template>
  <Icon :iconName="'arrow-up-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUpDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-double'
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
