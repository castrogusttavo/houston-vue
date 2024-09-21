
<template>
  <Icon :iconName="'pi-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PiSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pi-square'
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
