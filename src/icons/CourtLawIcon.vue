
<template>
  <Icon :iconName="'court-law'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CourtLawIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'court-law'
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
