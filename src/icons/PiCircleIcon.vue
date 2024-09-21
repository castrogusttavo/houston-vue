
<template>
  <Icon :iconName="'pi-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PiCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pi-circle'
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
