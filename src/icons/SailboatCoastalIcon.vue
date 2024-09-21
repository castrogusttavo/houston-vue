
<template>
  <Icon :iconName="'sailboat-coastal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SailboatCoastalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sailboat-coastal'
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
