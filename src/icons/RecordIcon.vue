
<template>
  <Icon :iconName="'record'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RecordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'record'
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
