
<template>
  <Icon :iconName="'eid-mubarak'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EidMubarakIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eid-mubarak'
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
