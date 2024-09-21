
<template>
  <Icon :iconName="'court-house'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CourtHouseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'court-house'
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
