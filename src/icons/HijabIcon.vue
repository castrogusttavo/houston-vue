
<template>
  <Icon :iconName="'hijab'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HijabIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hijab'
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
